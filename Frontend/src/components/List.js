import React, { Component } from 'react'
import axios from 'axios'
import Button from './Button'

const api = axios.create({
    baseURL: 'http://localhost:1234',
})

class List extends Component {
    constructor() {
        super()
        this.state = { astronauts: [], editable: null }
        this.inputSubmitRef = React.createRef()
        this.inputEditRef = React.createRef()
    }

    async componentDidMount() {
        await this.getAstronauts()
    }

    async getAstronauts() {
        try {
            const response = await api.get('/getAstronauts')
            this.setState({ astronauts: response.data })

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async addAstronaut(value) {
        try {
            await api.post('/addAstronaut', {
                name: value,
            })

            this.setState({
                // using Date.now() because we need an uniq id
                astronauts: [...this.state.astronauts, { id: Date.now(), name: value }]
            })
        } catch (error) {
            console.error(error)
        }
    }

    async deleteAstronaut(id) {
        try {
            await api.delete(`/deleteAstronaut/${id}`)
            this.setState({
                astronauts: this.state.astronauts.filter((astronaut) => astronaut.id !== id)
            })
        } catch (error) {
            console.error(error)
        }
    }

    async editAstronaut(id, newName) {
        try {
            await api.put(`/updateAstronaut/${id}`, {
                newName: newName
            })
            this.setState({
                astronauts: this.state.astronauts.map((astronaut) => {
                    if (astronaut.id === id) return { ...astronaut, name: newName }
                    return astronaut
                }),
            })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { astronauts, editable } = this.state
        return (
            <div>
                <h1>List of Astronauts</h1>
                <ul>
                    {astronauts.map((astronaut) => (
                        <div key={astronaut.id}>
                            {editable === astronaut.id
                                ?
                                (
                                    <div>
                                        <label>
                                            New name:
                                            <input type="text"
                                                ref={this.inputEditRef}
                                                defaultValue={astronaut.name}
                                            />
                                        </label>
                                        <Button
                                            onClick={() => {
                                                this.editAstronaut(astronaut.id, this.inputEditRef.current.value)
                                                this.setState({ editable: null })
                                            }}
                                            label="OK"
                                        />
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <div>{astronaut.name}</div>
                                        <Button
                                            label="Edit"
                                            onClick={() => this.setState({ editable: astronaut.id })}
                                        />
                                    </div>
                                )}


                            <Button
                                onClick={() => this.deleteAstronaut(astronaut.id)}
                                label="Delete"
                            />
                        </div>
                    ))}
                </ul>
                <div>
                    <label>
                        Name:
                        <input type="text" ref={this.inputSubmitRef} />
                    </label>
                    <Button
                        type="submit"
                        onClick={() => this.addAstronaut(this.inputSubmitRef.current.value)}
                        label="Submit"
                    />
                </div>
            </div>
        )
    }
}

export default List
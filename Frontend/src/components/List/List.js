import React, { Component } from 'react'
import axios from 'axios'
import Button from '../Button'
import './List.style.css'
import star from '../../ressources/star.png'

// Icons
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import PublishIcon from '@mui/icons-material/Publish'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

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
            const response = await api.get('/astronauts')
            this.setState({ astronauts: response.data })

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async addAstronaut(value) {
        try {
            await api.post('/astronaut', {
                name: value,
            })

            this.setState({
                // using Date.now() because we need an uniq id
                astronauts: [...this.state.astronauts, { id: Date.now(), name: value }]
            })

            document.getElementById("inputAdd").reset()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteAstronaut(id) {
        try {
            await api.delete(`/astronaut/${id}`)
            this.setState({
                astronauts: this.state.astronauts.filter((astronaut) => astronaut.id !== id)
            })
        } catch (error) {
            console.error(error)
        }
    }

    async editAstronaut(id, newName) {
        try {
            await api.patch(`/astronaut/${id}`, {
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

    stars() {
        const stars = [];
        for (let i = 0; i < 4; i++) {
               stars.push(<img src={star} alt='star' id={`star${[i]}`} className='star' />)
        }
        return stars
    }

    render() {
        const { astronauts, editable } = this.state
        return (
            <div className='list'>

                <div>
                    {this.stars()}
                </div>

                <h1>Astronauts</h1>

                <form id='inputAdd'>
                    <label>
                        Add an astronaut:
                        <input
                            type="text"
                            ref={this.inputSubmitRef}
                        />
                    </label>
                    <Button
                        type="submit"
                        onClick={() => this.addAstronaut(this.inputSubmitRef.current.value)}
                        icon={<PublishIcon />}
                    />
                </form>

                <ul>
                    {astronauts.map((astronaut) => (
                        <div key={astronaut.id} className='content'>
                            {editable === astronaut.id
                                ?
                                (
                                    <div>
                                        <label>
                                            Enter a new name:
                                            <input
                                                type="text"
                                                ref={this.inputEditRef}
                                                defaultValue={astronaut.name}
                                            />
                                        </label>
                                        <Button
                                            onClick={() => {
                                                this.editAstronaut(astronaut.id, this.inputEditRef.current.value)
                                                this.setState({ editable: null })
                                            }}
                                            icon={<CheckCircleIcon />}
                                        />
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <div className='name'>{astronaut.name}</div>
                                        <Button
                                            onClick={() => this.setState({ editable: astronaut.id })}
                                            icon={<EditIcon />}
                                        />
                                    </div>
                                )}

                            <Button
                                onClick={() => this.deleteAstronaut(astronaut.id)}
                                icon={<DeleteIcon />}
                            />
                        </div>
                    ))}
                </ul>

            </div>
        )
    }
}

export default List
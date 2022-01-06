import React, { useState }from 'react'
import axios from 'axios'

const AddHotel = () => {
    const [title, setTitle] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [image_url, setImageUrl] = useState('')
    
    const saveHotel = (e) => {
        e.preventDefault();
        
        const hotel = {title, country, city, street, image_url}
        // console.log(hotel)
        axios.post("http://localhost:3000/hotel/create", hotel).then((response) =>{
                console.log(response.data)
                console.log(JSON.stringify(hotel))
            }).catch(error => {
                console.log(JSON.stringify(hotel))
                
                console.log(error)
            })
    }

    return (
        <div>
            <div className = "container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center"></h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        placeholder="Enter title"
                                        name="title"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Country</label>
                                    <input
                                        type="text"
                                        placeholder="Enter country"
                                        name="country"
                                        className="form-control"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        placeholder="Enter city"
                                        name="city"
                                        className="form-control"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Street</label>
                                    <input
                                        type="text"
                                        placeholder="Enter street"
                                        name="street"
                                        className="form-control"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Image Url</label>
                                    <input
                                        type="text"
                                        placeholder="Enter title"
                                        name="image_url"
                                        className="form-control"
                                        value={image_url}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    ></input>
                                </div>
                                <button className="btn btn-success"
                                    onClick={(e) => saveHotel(e)}
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddHotel
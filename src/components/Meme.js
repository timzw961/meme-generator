import React from "react"

export default function Meme(){

    const [memes, setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMemeImages.length)
        const imageUrl = allMemeImages[randomNumber].url
        setMemes(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: imageUrl
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemes(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name = "topText"
                    onChange = {handleChange}
                    value={memes.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name = "bottomText"
                    onChange = {handleChange}
                    value={memes.bottomText}
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={memes.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memes.topText}</h2>
                <h2 className="meme--text bottom">{memes.bottomText}</h2>
            </div>
        </main>
    )
}
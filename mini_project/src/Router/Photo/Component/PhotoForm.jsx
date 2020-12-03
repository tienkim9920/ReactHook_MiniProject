import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './PhotoForm.css'
import { Category } from '../../../Global/Category';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

PhotoForm.propTypes = {
    handlerSubmit: PropTypes.func,
    handlerEdit: PropTypes.func,
    initialState: PropTypes.object,
    isCheck: PropTypes.bool
};

PhotoForm.defaultProps = {
    handlerSubmit: null,
    handlerEdit: null,
    initialState: {},
    isCheck: null
}

function PhotoForm(props) {

    const { handlerSubmit, handlerEdit, initialState, isCheck } = props

    const [title, setTitle] = useState(initialState.title)

    const [image, setImage] = useState(initialState.img)

    const [category, setCategory] = useState('1')

    const colorStatic = useRef('red')

    const [color, setColor] = useState('red')

    function RandomColor(newColorActive) {
        
        const COLOR_Array = ['red', 'yellow', 'blue']

        const indexColor = COLOR_Array.findIndex(index => {
            return index === newColorActive
        })

        var compareColor = indexColor

        while(compareColor === indexColor){
            compareColor = Math.trunc(Math.random() * 3)
        }

        return COLOR_Array[compareColor]
    }

    function HandlerColor(e){
        e.preventDefault()

        const renderColor = RandomColor(colorStatic.current)

        setColor(renderColor)

        colorStatic.current = renderColor

        console.log(renderColor)
    }

    function HandlerSubmit(e){
        e.preventDefault()

        if (!handlerSubmit ){
            return
        }

        if (!handlerEdit ){
            return
        }

        
        if (isCheck){
            //Nếu True thì đang ở Route Edit thì mình sẽ gọi props handlerEdit do component cha truyền xuống và đưa ngược lại component cha
            console.log("True")

            const data = {
                id: initialState.id,
                title: title,
                img: image,
            }

            handlerEdit(data)
        }else{
            //Nếu False thì đang ở Route Add thì mình sẽ gọi props handlerSubmit do component cha truyền xuống và đưa ngược lại component cha
            console.log("False")

            const data = {
                id: Math.random().toString(),
                title: title,
                img: image,
            }

            handlerSubmit(data)
        }
    }



    const onChangeText = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }

    const onChangeImage = (e) => {
        setImage(e.target.value)
        console.log(image)
    }

    const handlerChange = (e) => {
        console.log(category)
        setCategory(e.target.value)
    }


    return (
        <div className="container">
            <form className="form_photo w-50 mx-auto" onSubmit={HandlerSubmit}>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={onChangeText} 
                        required
                        value={title}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Title">Source Image:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={onChangeImage} 
                        required
                        value={image}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="Category">Category:</label>
                    <select className="form-control" onChange={handlerChange}>
                        { Category && Category.map(value => (
                            <option value={value.value} key={value.value}>{value.category}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">                    
                    <button type="submit" className="btn btn-primary" onClick={HandlerColor}>Random A Color</button>
                    <div className="background_Color" style={{ backgroundColor: color}}>
                    </div>
                </div>
                
                <input className="btn btn-primary" type="submit" value="Add To Photo"/>
            </form>
        </div>
    );
}

export default PhotoForm;
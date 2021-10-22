import React, {useState, useEffect} from "react";
import axios from 'axios';

const Convert = ({language, text})=>{
    const [translated, setTranslated]= useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeId = setTimeout(()=>{
            setDebouncedText(text);
        },500);

        return() =>{
            clearTimeout(timeId); 
        };
    },[text]);
    // when we get new lang & text, useEffect calls that's we are using [language, text]
    // 2nd params is empty object, Cuze we don't want to send body
    useEffect(() => {
        const doTranslation = async () =>{
            const {data}= await axios.post(
                'https://translation.googleapis.com/language/translate/v2', 
                {}, 
                {
                params: {
                    // q: text,
                    q: debouncedText,
                    target: language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
                }
            );
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
      }, [language, debouncedText]);
    
    return (
        <div>
            <h1 className="ui form"> {translated} </h1>
        </div>
    );
};

export default Convert;
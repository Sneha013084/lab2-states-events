// typescript- TextInput

export interface TextInputProps{
    onTextChange: (text:string)=> void;  //it is a typescript function type annotation- describe the type of prop(void for updating the status)
    placeholder?:string;
    initialValue?:string;

}
// StatsDisplay 

export interface TextStats{  //shape of the data

    characterCount :number;
    wordCount :number;
    readingTime: number; //minutes

}
export interface  StatsDisplayProps{  // to consider all the datas as package
    stats : TextStats;
    showReadingTime :boolean;

}

//props for charactercount(combine text and stats)

export interface CharacterCounterProps {
    minWords? : number;
    maxWords?: number;
    targetReadingTime?: number;
}




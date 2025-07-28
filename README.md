Resources : Lessons and class recordings.

This project is an interactive character counter application built with react and typescript. 

It demonstrates essential frontend development skills such as state management, event handling, and component communication using React Hooks.

The application allows users to input text and provides real-time statistics including:

- Character count
- Word count
- Estimated reading time

 ##  index.tsx
 
TextInputProps : Handles user input and communicates changes to the parent.

TextStats and StatsDisplayProps: Displays calculated statistics(character count, word countand reading time) from the input text.

CharacterCounterProps : Main component that integrates TextInput and StatsDisplay, manages state, and handles calculations.

## TextInput component

The TextInput component serves as the user input interface for the character counter application.

Displaying a text input area

Typically a <textarea>  field where the user can type or paste content.

Tghis component will listening to user input events.

Every time the user types or modifies the text, the component captures that change.

Notifying the parent component of text changes.

The typed input is sent upward using the onTextChange callback function prop, enabling the parent to update statistics in real-time.

initialValue = '' → If no default text is provided, the input starts empty.

## For  State Setup:  const [text, setText] = useState(initialValue) ## 

It creates a piece of local state named text using the useState hook.

The initial value of this state is set to initialValue from props.

setText is the function used to update the state whenever the user types.

const handleChange :  The handleChange function is triggered every time the user types or modifies the content in the <textarea> and do two things
                         Update the local state
                         Communicate with the parent

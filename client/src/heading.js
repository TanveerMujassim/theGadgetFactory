// import react from 'react'

const Heading = (props) => {

    const heading2 = (props) =>{
        return (`THE   ${props.mainHeading}`)
    }

    return <h1 >{heading2(props)}</h1>
}

export default Heading
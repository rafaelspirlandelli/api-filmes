import styled from "styled-components"

 export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0%
    }

h2 {
    text-align: center;
    margin: 5rem 0%
}

`


export const MovieList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 5rem;
        row-gap: 5rem;

`

export const Movie = styled.li`
    
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 3rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    };
    
`

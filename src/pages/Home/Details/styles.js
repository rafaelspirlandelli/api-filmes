import styled from 'styled-components'

export const Container = styled.div`


h1 {
    margin: 3rem 0;
}

h2 {
    margin: 1rem 0;
    color: #fff
}

.movie {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 250px;
    border-radius: 1rem;
    margin: auto;
    text-align: center;
    display: flex;
    
}

.details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
}

button {
    background: black;
    border: none;
    cursor: pointer; 
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1.5rem;
    font-size: 100%;
    transition: all 0.3s;
}

button:hover {
    background: #5848c2;
    margin-bottom: 1rem;
    font-size: 110%;
}

.release-date {
    opacity: 1.0;
    margin-top: 1.5rem;
}

`


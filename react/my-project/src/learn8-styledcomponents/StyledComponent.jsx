import styled from 'styled-components'

// Define styled components
const Container = styled.div`
    background-color: lightyellow;
    padding: 20px;
    border-radius: 5px;
`;

const Title = styled.h1`
    color: darkorange;
`;

const StyledComponent = ()=> {
    return (
        <Container>
            <h1>This is styled components</h1>
            <hr />
            <Title>Hello, World</Title>
            <p>This component is styled with styled-components.</p>
        </Container>
    );
}

export default StyledComponent;

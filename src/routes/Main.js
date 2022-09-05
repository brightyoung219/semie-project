import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeDisplay } from '../store';

function Main() {

  const navDisplay = useSelector( (state) => state.navDisplay.displayValue );
  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(changeDisplay('block'));
    console.log(navDisplay)
  }, [])

  const Container = styled.div`
  `
  return (
    <Container>
      main page
    </Container>
  )
}

export default Main;
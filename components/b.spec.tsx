import React from 'react'
import { mount } from 'cypress-react-unit-test'
import B from './b'

describe('Styled jsx not working', () => {
    it('has style', () => {
        mount(<B />)
    })

    it('is the same test but fails', () => {
        mount(<B />)
    })
})

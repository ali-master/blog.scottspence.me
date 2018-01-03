import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

import { StyledH1, StyledP } from '../../theme/globalStyle'

const TagsTitle = StyledP.extend`
  margin: 0.25rem 0rem 0.25rem 0.25rem;
  padding: 0.25rem 0rem 0.25rem 0rem;
  font-size: 0.55rem;
  font-weight: bold;
`
const TagsList = StyledP.extend`
  margin: 0.1rem 0rem 0.1rem 0rem;
  padding: 0.1rem 0rem 0.1rem 0rem;
  font-size: 0.45rem;
  font-weight: bold;
`

// top right bottom left
const Container = styled.div`
  margin: 0rem 0.75rem 0rem 0.75rem;
  padding: 0rem 0rem 0rem 0rem;
  /* border: 1px solid ${props => props.border}; */
`

export const TagsContainer = props => (
  <Container>
    {props.title === 'yes' ? (
      <TagsList>
        <TagsTitle>Tagged under:</TagsTitle>
        {props.tags.map(tag => <Tag key={tag} tag={tag} />)}
      </TagsList>
    ) : (
      <TagsList>{props.tags.map(tag => <Tag key={tag} tag={tag} />)}</TagsList>
    )}
  </Container>
)

export default TagsContainer

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledTitle = styled.div``;

const Title = ({ number, title }) => <StyledTitle>{`${number}. ${title}`}</StyledTitle>;

export default Title;

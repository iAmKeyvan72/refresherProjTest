import Styled from 'styled-components';

export const StyledTodoListItem = Styled.div`
 background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
    `;

export const StyledButtonsContainer = Styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
    `;

export const StyledButton = Styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    `;

export const StyledMarkAsCompleteButton = Styled(StyledButton)`
    background-color: #22ee22;
    `;

export const StyledRemoveTodoButton = Styled(StyledButton)`
    background-color: #ee2222;
    margin-left: 8px;
    `;

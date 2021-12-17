import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen, waitFor } from "@testing-library/react";

const testArticleWithAuthor = {
    id:"ahirde",
    headline:"test-headline",
    createdOn:"2021-12-17T07:52:00",
    author:"test-author",
    body:"test-body",
    summary:"test-summary"
}

const testArticleWithoutAuthor ={
    id:"ahirde",
    headline:"test-headline",
    createdOn:"2021-12-17T07:52:00",
    author:"",
    body:"test-body",
    summary:"test-summary"
}
test('renders component without errors', ()=> {
    render(<Article article={testArticleWithAuthor} />)
});

test('renders headline, author from the article when passed in through props', async ()=> {
    render(<Article article={testArticleWithAuthor} />)

    await waitFor( () => {
    const headline = screen.queryByText("test-headline");
    const author = screen.queryByText("By test-author");
    const summary = screen.queryByText("test-summary");
    const body = screen.queryByText("test-body");
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
})
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticleWithoutAuthor} />);
    const withoutAuthor = screen.getByText("By Associated Press");
    expect(withoutAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockGetData= jest.fn();
    render(<Article article={testArticleWithoutAuthor} handleDelete={mockGetData} />)

    const deleteButton = screen.getByTestId("deleteButton");
    userEvent.click(deleteButton);
    expect(mockGetData).toHaveBeenCalled();

});

//Task List:
//1. Complete all above tests. Create test article data when needed.
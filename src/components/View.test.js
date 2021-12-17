import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

const testArticles = [{
    id:"ahirde",
    headline:"test-headline",
    createdOn:"2021-12-17T07:52:00",
    author:"test-author",
    body:"test-body",
    summary:"test-summary"
},{
    id:"ahirde",
    headline:"test-headline",
    createdOn:"2021-12-17T07:52:00",
    author:"test-author",
    body:"test-body",
    summary:"test-summary"
},{
    id:"ahirde",
    headline:"test-headline",
    createdOn:"2021-12-17T07:52:00",
    author:"test-author",
    body:"test-body",
    summary:"test-summary"
}]

test("renders zero articles without errors", async () => {
    render(<View articles={ []} />)
});

test("renders three articles without errors", async ()=> {
    render(<View articles={testArticles} />)
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
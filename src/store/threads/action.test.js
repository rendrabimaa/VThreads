/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import { addThreadActionCreator, asyncAddThread } from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const fakeAddThreadResponse = {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
};

const fakeErrorResponse = new Error('Ups, Something went Wrong');

describe('asynAddThread thunk', () => {
    beforeEach(() => {
        api._createThread = api.createThread;
    });
        
    afterEach(() => {
        api.createThread = api._createThread;
        
        // delete backup data
        delete api._createThread;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        // stub implementation

        api.createThread = () => Promise.resolve(fakeAddThreadResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncAddThread({ title: 'Thread Pertama', body: 'Ini adalah thread pertama'})(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeAddThreadResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.createThread = () => Promise.reject(fakeErrorResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // mock alert
        window.alert = vi.fn();
    
        // action
        await asyncAddThread({ title: 'Thread Pertama', body: 'Ini adalah thread pertama'})(dispatch);
    
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
});
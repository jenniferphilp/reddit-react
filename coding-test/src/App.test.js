import { sortReddit, shorten, humanReadableTime } from './helpers';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Components/Header'

describe("test some components!", () => {
    it('Header renders correctly', () => {
        const tree = renderer
          .create(
              <Header
                selectedSubreddit="nosleep"
                changeHeader="true"
              />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
})

//helper function tests
const fakeData1 = [
    {ups: 1 },
    {ups: 10 },
    {ups: 5 },
    {ups: 17 }
]

const fakeData2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

describe("Test helper functions", () => {
    it("should sort data by upvotes based on boolean passed in", () => {
        expect(sortReddit(false, fakeData1)).toEqual([
            {ups: 17 },
            {ups: 10 },
            {ups: 5 },
            {ups: 1 }
        ])
    })

    it("should shorten text to appropriate number of characters", () => {
        let desiredLength = 100;
        expect(shorten(fakeData2, desiredLength, '').length).toEqual(100)
    })

    it("should convert UNIX-UTC time to the equivalent human readable form", () => {
        //covert test date to UTC time in seconds
        let testDateEpoch = Date.UTC(96, 11, 1, 0, 0, 0)/1000 ;
        let testDateReadable = "Sat Nov 30 1996 19:00:00 GMT-0500 (EST)"
        expect(humanReadableTime(testDateEpoch)).toEqual(testDateReadable)
    })

});








import sortReddit  from './helpers';
// import { getData } from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("Handle Sort Functions", () => {
    it("should sort data by upvotes based on boolean passed in - 'sorted' ", () => {
        expect(sortReddit(true, [2, 1, 6, 4, 11])).toEqual([
            1, 2, 4, 6, 11
        ])
  })
});




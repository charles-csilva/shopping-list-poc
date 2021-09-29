import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { ShoppingListComponent } from './ShoppingListComponent';
import {
	activeItemMarkAsCompleteAction,
	activeItemDeleteAction,
} from '../redux/activeItemsSlice';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));
describe('ShoppingListComponent', () => {
	const mockData = [{ id: 1, name: 'p1', price: 1.23 }];

	describe('must be properly rendered when', () => {
		it('data is an empty array', () => {
			const component = renderer.create(
				<ShoppingListComponent
					data={[]}
					isCompleteAction
				></ShoppingListComponent>
			);
			expect(component).toMatchSnapshot();
		});

		it('data has values and action available is Mark as Completed', () => {
			const fixture = renderer.create(
				<ShoppingListComponent
					data={mockData}
					isCompleteAction
				></ShoppingListComponent>
			);
			expect(fixture).toMatchSnapshot();
		});

		it('data has values and action available is Delete', () => {
			const component = renderer.create(
				<ShoppingListComponent
					data={mockData}
					isCompleteAction={false}
				></ShoppingListComponent>
			);
			expect(component).toMatchSnapshot();
		});
	});

	describe('must handle clicks properly when', () => {
		let container = null;
		beforeEach(() => {
			container = document.createElement('div');
			document.body.appendChild(container);
		});

		afterEach(() => {
			unmountComponentAtNode(container);
			container.remove();
			container = null;
		});
		it('action is Mark as Complete', () => {
			act(() => {
				render(
					<ShoppingListComponent
						data={mockData}
						isCompleteAction
					></ShoppingListComponent>,
					container
				);
			});
			const button = document.querySelector('button.btn-action');
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			expect(mockDispatch).toHaveBeenCalledTimes(1);
			expect(mockDispatch).toHaveBeenCalledWith(
				activeItemMarkAsCompleteAction(mockData[0].id)
			);
		});

		it('action is Delete', () => {
			act(() => {
				render(
					<ShoppingListComponent
						data={mockData}
						isCompleteAction={false}
					></ShoppingListComponent>,
					container
				);
			});
			const button = document.querySelector('button.btn-action');
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			expect(mockDispatch).toHaveBeenCalledTimes(1);
			expect(mockDispatch).toHaveBeenCalledWith(
				activeItemDeleteAction(mockData[0].id)
			);
		});
	});
});

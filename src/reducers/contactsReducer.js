import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action) {
	switch(action.type) {
		case "ADD_CONTACT": {
			return {
				...state,
				contactList: [...state.contactList, action.payload]
			}
		}

		case "HANDLE_INPUT_CHANGE": {
			
			return {
				...state, newContact: {
					...state.newContact, ...action.payload }
			}
		}
		
		case "TOGGLE_CONTACT_FORM": {
			return {
				...state,
				ui: {
					isContactFormHidden: !state.ui.isContactFormHidden
				}
			}
		}

		default: return state;
	}
}
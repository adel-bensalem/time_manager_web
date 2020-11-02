import {
    isGeneralManagerAccountCreationRequestPending,
    isGeneralManagerAccountCreationRequestSuccess,
    isGeneralManagerAccountCreationRequestFailure,
} from "./createGeneralManagerAccount";
import {
    getGeneralManagerAccountCreationFormData,
    canSubmitGeneralManagerAccountCreationForm
} from "./editGeneralManagerAccountCreationForm";
import {
    isAuthenticationRequestPending,
    isAuthenticationRequestSuccess,
    isAuthenticationRequestFailure
} from "./authenticate";
import {
    getAuthenticationFormEditionFormData,
    canSubmitAuthenticationFormEditionForm
} from "./editAuthenticationForm";

function createSelector(getState) {
    return {
        isGeneralManagerAccountCreationRequestPending: isGeneralManagerAccountCreationRequestPending(
            () => getState().generalManagerAccountCreation
        ),
        isGeneralManagerAccountCreationRequestSuccess: isGeneralManagerAccountCreationRequestSuccess(
            () => getState().generalManagerAccountCreation
        ),
        isGeneralManagerAccountCreationRequestFailure: isGeneralManagerAccountCreationRequestFailure(
            () => getState().generalManagerAccountCreation
        ),
        getGeneralManagerAccountCreationFormData: getGeneralManagerAccountCreationFormData(
            () => getState().generalManagerAccountCreationFormEdition
        ),
        canSubmitGeneralManagerAccountCreationForm: canSubmitGeneralManagerAccountCreationForm(
            () => getState().generalManagerAccountCreationFormEdition
        ),
        isAuthenticationRequestPending: isAuthenticationRequestPending(
            () => getState().authentication
        ),
        isAuthenticationRequestSuccess: isAuthenticationRequestSuccess(
            () => getState().authentication
        ),
        isAuthenticationRequestFailure: isAuthenticationRequestFailure(
            () => getState().authentication
        ),
        getAuthenticationFormEditionFormData: getAuthenticationFormEditionFormData(
            () => getState().authenticationFormEdition
        ),
        canSubmitAuthenticationFormEditionForm: canSubmitAuthenticationFormEditionForm(
            () => getState().authenticationFormEdition
        ),
    }
}

export {createSelector};
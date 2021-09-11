export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY';

export const setTradeModalVisibility = (isVisible) => (dispatch) => {
  dispatch(setTradeModalVisibilitySuccess(isVisible));
};

export const setTradeModalVisibilitySuccess = (isVisible) => ({
  type: SET_TRADE_MODAL_VISIBILITY,
  payload: { isVisible },
});

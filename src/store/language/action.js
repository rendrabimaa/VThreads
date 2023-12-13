const ActionType = {
  TOGGLE_LANGUAGE: 'TOGGLE_LANGUAGE',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
};

const toggleLanguage = () => ({
  type: ActionType.TOGGLE_LANGUAGE,
});

const changeLanguage = (language) => ({
  type: ActionType.CHANGE_LANGUAGE,
  payload: language,
});

export {
  ActionType,
  toggleLanguage,
  changeLanguage,
};

import autoComplete from '@tarekraafat/autocomplete.js';

import countryList from './../helpers/countryList';

const autoCompleteFunc = () => {
  const autoCompleteJS = new autoComplete({
    selector: '#autoComplete',
    placeHolder: 'e.g Bali, Indonesia',
    data: {
      src: countryList,
    },
    resultItem: {
      highlight: true,
    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        },
      },
    },
  });
};

export default autoCompleteFunc;

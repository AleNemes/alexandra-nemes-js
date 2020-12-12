// Pct 1 Afiseaza datele persoanei din formular in DOM.
// Pct 2 In fieldsetul Detalii adauga un input de abilitati numit
//  skills si un buton de + in dreptul sau. La fiecare apasare a
//  butonului, daca in input exista text, afiseaza abilitatea noua intr-o lista neordonata.
//
// Pct 3 In dreptul fiecarui element din lista adauga un buton de stergere.
// In momentul in care se apasa sterge elementul.

const createFriendTextInput = () => {
  const $friendWidget = $('<div>', {
    class: 'friend-textwidget',
  });

  $friendWidget
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Modifica numele',
      }),
    )
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Modifica prenumele',
      }),
    )
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Modifca Varsta',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Salveaza',
        class: 'save',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Renunta',
        class: 'cancel',
      }),
    );

  return $friendWidget;
};

const createTextCaptureInput = (placeholder = 'Adauga un skill') => {
  const $widget = $('<div>', {
    class: 'text-widget',
  });

  $widget
    .append(
      $('<input>', {
        type: 'text',
        placeholder,
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Salveaza',
        class: 'save',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Renunta',
        class: 'cancel',
      }),
    );

  return $widget;
};

const formId = 'personForm';

const createSkillUl = () => {
  const ulId = 'skills-list';
  let $ul = $(`#${ulId}`);
  let editMode = false;

  if ($ul.length !== 1) {
    $ul = $('<ul>', {
      id: ulId,
    });

    $(`#${formId}`).after($ul);

    $ul.on('click', '.delete', (event) => {
      const $element = $(event.currentTarget);

      editMode = false;

      $element.parent().remove();

      if ($('#skills-ul li').length === 0) {
        $ul.remove();
      }
    });

    $ul.on('click', '.edit', (event) => {
      if (editMode === true) {
        return;
      }
      editMode = true;

      const $element = $(event.currentTarget);
      const $parentLi = $element.parent();
      const $widget = createTextCaptureInput('Modifica skillul');

      $parentLi.prepend($widget);
    });

    $ul.on('click', '.text-widget .cancel', (event) => {
      editMode = false;
      //js -> event.currentTarget.parentElement.remove()

      $(event.currentTarget).parent().remove();
    });

    $ul.on('click', '.text-widget .save', function () {
      $saveButton = $(this);
      let value = $saveButton.prev().val();
      let $parentLi = $saveButton.parents('li');

      // $parentLi.children('.skill-text)
      $parentLi.find('.skill-text').text(value);

      editMode = false;
      $saveButton.parent().remove();
    });
  }

  return $ul;
};

const createCreatureDetails = (detailsId) => {
  let $p = $(`#${detailsId}`);

  if ($p.length < 1) {
    $p = $('<p>', {
      id: detailsId,
    });

    $(`#${formId}`).after($p);
  }

  return $p;
};

$(document).ready(() => {
  let $skillInput = $('#skills');
  // nextElementSibling <- DOM
  $skillInput.next().on('click', () => {
    const value = $skillInput.val();
    const $skillsUl = createSkillUl();
    const $skillLi = $('<li>')
      .append(
        $('<span>', {
          class: 'skill-text',
          text: value,
        }),
      )
      .append(
        $('<button>', {
          text: '-',
          class: 'delete',
        }),
      )
      .append(
        $('<button>', {
          text: 'Edit',
          class: 'edit',
        }),
      );

    $skillsUl.append($skillLi);

    $skillInput.val('');
  });

  // function version
  $(`#${formId}`).on('submit', function (event) {
    let $form = $(this); // <-- function version this = dom element
    const data = $form.serializeArray();
    const desiredKeys = ['name', 'surname', 'age'];

    const userData = data.filter((key) => {
      if (desiredKeys.includes(key.name)) {
        return true;
      } else {
        return false;
      }
    });

    $personDetails = createCreatureDetails('person-details');
    let message = `Numele meu este ${userData[0].value} ${userData[1].value} si am ${userData[2].value} ani.`;
    $personDetails.text(message);
    event.preventDefault();
  });

  // pt form element  maii bine evenimentul de change decat click
  $('#pet-checkbox').on('change', function () {
    const checked = $(this).is(':checked');
    const $petFieldset = $(this).parent().next();

    if (checked === true) {
      $petFieldset.slideDown();
    } else {
      $petFieldset.slideUp();
    }
  });

  $('#add-pet').on('click', () => {
    $form = $(`#${formId}`);
    const data = $form.serializeArray();
    const desiredKeys = ['pet-name', 'pet-species', 'pet-age'];

    const petData = data.filter((key) => {
      if (desiredKeys.includes(key.name)) {
        return true;
      } else {
        return false;
      }
    });

    $petDetails = createCreatureDetails('pet-details');
    let message = `Animalul meu se numeste ${petData[0].value} , este ${petData[1].value} si are ${petData[2].value} ani.`;
    $petDetails.text(message);
  });
});

const createFriendUl = () => {
  const ulId = 'friends-list';
  let $ul = $(`#${ulId}`);
  let editMode = false;

  if ($ul.length !== 1) {
    $ul = $('<ul>', {
      id: ulId,
    });

    $(`#${formId}`).after($ul);

    $ul.on('click', '.delete', (event) => {
      const $element = $(event.currentTarget);

      editMode = false;

      $element.parent().remove();

      if ($('#friends-list li').length === 0) {
        $ul.remove();
      }
    });

    $ul.on('click', '.edit', (event) => {
      if (editMode === true) {
        return;
      }
      editMode = true;

      const $element = $(event.currentTarget);
      const $parentLi = $element.parent();
      const $friendWidget = createFriendTextInput();

      $parentLi.prepend($friendWidget);
    });

    $ul.on('click', '.friend-textwidget .cancel', (event) => {
      editMode = false;

      $(event.currentTarget).parent().remove();
    });

    $ul.on('click', '.friend-textwidget .save', function () {
      $saveButton = $(this);
      let value = $saveButton.siblings('.friend-age').val();
      let $parentLi = $saveButton.parents('li');

      $parentLi.find('.friend-name').text(value);
      $parentLi.find('.friend-surname').text(value);
      $parentLi.find('.friend-age').text(value);

      editMode = false;
      $saveButton.parent().remove();
    });
  }

  return $ul;
};

$('#add-friend').on('click', () => {
  $form = $(`#${formId}`);
  const data = $form.serializeArray();
  const desiredKeys = ['friend-name', 'friend-surname', 'friend-age'];

  const friendData = data.filter((key) => {
    if (desiredKeys.includes(key.name)) {
      return true;
    } else {
      return false;
    }
  });

  $friendDetails = createFriendUl('friend-details');

  let $friendInput = $('#friends');
  const value = $friendInput.val();
  const $friendsUl = createFriendUl();
  const $friendLi = $('<li>')
    .append(
      $('<span>', {
        class: 'friend-name',
        text: friendData[0].value,
      }),
    )
    .append(
      $('<span>', {
        class: 'friend-surname',
        text: friendData[1].value,
      }),
    )
    .append(
      $('<span>', {
        class: 'friend-age',
        text: friendData[2].value,
      }),
    )
    .append(
      $('<button>', {
        text: '-',
        class: 'delete',
      }),
    )
    .append(
      $('<button>', {
        text: 'Edit',
        class: 'edit',
      }),
    );

  $friendsUl.append($friendLi);

  $friendInput.val('');
});

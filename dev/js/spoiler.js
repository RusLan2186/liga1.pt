document.addEventListener('DOMContentLoaded', () => {
  let accordionInit = false;

  // Считаем высоту заголовка + всех элементов
  const getHeights = (content) => {
    const head = content.querySelector('.res__head');
    const items = content.querySelectorAll('.res__item');

    let itemsH = 0;
    items.forEach(item => {
      itemsH += item.scrollHeight;
    });

    return {
      headH: head ? head.offsetHeight : 0,
      bodyH: itemsH
    };
  };

  // Коллапс: показываем только заголовок
  const setCollapsed = (content) => {
    const { headH } = getHeights(content);
    content.style.maxHeight = headH + 'px';
    content.classList.remove('open-spoiler');
  };

  // Раскрытие: показываем заголовок + все элементы
  const setExpanded = (content) => {
    const { headH, bodyH } = getHeights(content);
    content.style.maxHeight = headH + bodyH + 'px';
    content.classList.add('open-spoiler');
  };

  // Переключение
  const toggleAccordion = (e) => {
    const currentContent = e.currentTarget.closest('.res__content');
    if (!currentContent) return;

    // Закрыть остальные
    document.querySelectorAll('.res__content.open-spoiler').forEach(c => {
      if (c !== currentContent) setCollapsed(c);
    });

    if (currentContent.classList.contains('open-spoiler')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      void currentContent.offsetHeight; // триггер релоада для transition
      setCollapsed(currentContent);
    } else {
      const { headH } = getHeights(currentContent);
      currentContent.style.maxHeight = headH + 'px';
      void currentContent.offsetHeight;
      setExpanded(currentContent);
    }
  };

  // Инициализация высот при ресайзе
  const initHeights = () => {
    document.querySelectorAll('.res__content').forEach(content => {
      if (content.classList.contains('open-spoiler')) setExpanded(content);
      else setCollapsed(content);
    });
  };

  const initAccordion = () => {
    document.querySelectorAll('.res__head').forEach(head => {
      head.addEventListener('click', toggleAccordion);
    });

    // Открыть первый спойлер
    const first = document.querySelector('.res__content');
    if (first) first.classList.add('open-spoiler');

    initHeights();
    accordionInit = true;
  };

  const destroyAccordion = () => {
    document.querySelectorAll('.res__head').forEach(head => {
      head.removeEventListener('click', toggleAccordion);
    });
    document.querySelectorAll('.res__content').forEach(content => {
      content.classList.remove('open-spoiler');
      content.style.maxHeight = '';
    });
    accordionInit = false;
  };

  const checkAccordion = () => {
    if (window.innerWidth <= 1099.98 && !accordionInit) initAccordion();
    else if (window.innerWidth > 1099.98 && accordionInit) destroyAccordion();
    else if (accordionInit) initHeights(); // пересчет при ресайзе
  };

  checkAccordion();
  window.addEventListener('resize', checkAccordion);
});

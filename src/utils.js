export const openNewTab = (
  title,
  entries,
  tabs,
  setTabs,
  setActiveKey,
  defaultQuery = ""
) => {
  const existingTab = tabs.filter((tab) => {
    return tab.eventKey === title;
  });
  if (existingTab.length === 0) {
    tabs.push({
      title: title,
      href: "#",
      eventKey: title,
      entries: entries,
      defaultQuery: defaultQuery,
    });
    setTabs(tabs);
    setActiveKey(tabs[tabs.length - 1].eventKey);
  } else {
    setActiveKey(existingTab[0].eventKey);
  }
};

export const closeTab = (eventKey, tabs) => {
  const tabToBeClosed = tabs.findIndex((tab) => tab.eventKey === eventKey);
  const copiedTabs = [...tabs];
  copiedTabs.splice(tabToBeClosed, 1);
  let newActiveKey = "";
  if (copiedTabs.length > 0) {
    newActiveKey = copiedTabs[tabToBeClosed % copiedTabs.length].eventKey;
  }

  return [copiedTabs, newActiveKey];
};

export const parseCSV = (text, rowDelimiter = "\n", entryDelimiter = ",") => {
  const lines = text.split(rowDelimiter);
  const headers = lines[0].split(entryDelimiter);
  const rows = [];
  lines.slice(1, lines.length - 1).forEach((line) => {
    const entries = line.split(entryDelimiter);
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = index < entries.length ? entries[index] : null;
    });
    rows.push(obj);
  });
  return rows;
};

export const getFieldDetails = (fieldName) => {
  if (fieldName.search("ID") !== -1) {
    return {
      type: "Number",
      processFn: parseInt,
    };
  }
  return {
    type: "String",
    processFn: (x) => x,
  };
};

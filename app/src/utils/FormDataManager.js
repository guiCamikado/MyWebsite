/**
 * @start 21/12/25
 * @lastUpdate 21/12/25
 * 
 * @about
 * Essa classe serve para gerenciar o tratamento e manipulação de JSON dentro das páginas envolvendo formulários
 */

export default class FormDataManager {
  static async handleEventInput(e, currentData, setValue) {
    const { name, value } = e.target;
    const newData = { ...currentData, [name]: value };
    setValue(newData);
    return newData;
  }
}
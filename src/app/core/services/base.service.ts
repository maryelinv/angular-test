

export default abstract class BaseService<T> {
  controller: string;

  constructor(controller: string) {
    this.controller = controller + "/";
  }

  async getAll(action = "", params?: object) {
  }

  async getAllWithPagination(
    action = "",
    pageSize: number = 10,
    pageNumber: number = 1,
    params?: object,
    orderBy?: "asc"
  ) {

  }


  async getById(id: string, params?: object, action = "") {
  }


  async create(body: T, action = "") {
  }

  async post(id: string, action = "", body: Partial<T> = {}) {

  }

  async delete(id: string) {
  }

  async patch(id: string, action = "", payload: Partial<T> = {}) {
  }

}
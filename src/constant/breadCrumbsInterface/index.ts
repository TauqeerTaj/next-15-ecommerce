export interface BreadCrumbsInterface {
    navigation: BreadCrumbsValue[]
  }
interface BreadCrumbsValue {
    step: string,
    path: string
}
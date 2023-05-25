import Page from './page'
class ProductPage extends Page{
    
    public get title () {return $('div.app_logo').getText()}
    public get productSortSelect () {return $('select.product_sort_container')}
    public get selectedSortOption () {return $('//select[@class="product_sort_container"]/preceding-sibling::span').getText()}
    public get productNameList () {return $$('div.inventory_item_name')}
    
    public async changeSortOption (sortParam:string){
        await this.productSortSelect.selectByVisibleText(sortParam)
    }

    public async validateSortFunctionality(order:string){
        if (order == 'Name (A to Z)'){
            const productsNameList:string[] = []
            const productsElements = await this.productNameList
            const length = productsElements.length
            for (var i = 0 ; i < length ; i++){
                const name:string = await productsElements[i].getText()
                productsNameList.splice(i,0,name)
            }
            return this.isSorted(productsNameList,'ASC')
        }
        if (order == 'Name (Z to A)'){
            const productsNameList:string[] = []
            const productsElements = await this.productNameList
            const length = productsElements.length
            for (var i = 0 ; i < length ; i++){
                const name:string = await productsElements[i].getText()
                console.log("index: "+ i + "R: "+name)
                productsNameList.splice(i,0,name)
            }
            return this.isSorted(productsNameList,'DESC')

        }   
    }
    public isSorted (list:string[],order:string){
        if (order == 'ASC' ){
            for (let i = 1; i < list.length; i++) {
                if (list[i] < list[i - 1]) {
                  return false;
                }
              }
            return true;
        }
        if (order == 'DESC' ){
            for (let i = 1; i < list.length; i++) {
                if (list[i] > list[i - 1]) {
                  return false;
                }
              }
            return true;
        }
    }

}
export default new ProductPage()
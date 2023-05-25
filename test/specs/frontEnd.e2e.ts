import LoginPage from '../pageobjects/login.page'
import ProductPage from '../pageobjects/product.page'

describe('E-commerce App', () => {
    before('Opening WebApp',async ()=>{
        await LoginPage.open()
    })
    it('should be sorted by Name A -> Z by default, test Name Z -> A sort ', async () => { 
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(await ProductPage.title).toEqual('Swag Labs')
        await expect(await ProductPage.selectedSortOption).toEqual("Name (A to Z)")
        await expect(await ProductPage.validateSortFunctionality('Name (A to Z)')).toBe(true)
        await ProductPage.changeSortOption("Name (Z to A)")
        await expect(await ProductPage.selectedSortOption).toEqual("Name (Z to A)")
        await expect(await ProductPage.validateSortFunctionality('Name (Z to A)')).toBe(true)

        

    })
})



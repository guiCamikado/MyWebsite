export default class MobileManager {
    /**
     * 
     * @param {"window.innerWidth"} screenWidth 
     * @returns 
     */
    static isMobile(screenWidth) {
        if (screenWidth < 768) {
            return true
        } else {
            return false
        }
    }
}
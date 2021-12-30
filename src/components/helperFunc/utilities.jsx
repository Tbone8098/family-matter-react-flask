export default function toggleClasses(element, classes = []){
    let parent = element.parentElement
    let children = parent.children
    for (let child of children) {
        console.log(child);
        if (child.id === element.id){
            for (let cls of classes) {
                element.classList.add(cls)
            }
        } else {
            for (let cls of classes) {
                child.classList.remove(cls)
            }
        }
    }
}
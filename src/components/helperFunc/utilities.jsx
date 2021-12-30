export default function underline(element){
    let parent = element.parentElement
    let children = parent.children
    for (let child of children) {
        console.log(child);
        if (child.id === element.id){
            element.classList.add('underlined')
        } else {
            child.classList.remove('underlined')
        }
    }
}
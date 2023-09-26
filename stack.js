class Stack {
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    toString(){
        console.log(this.items.toString())
    }
    size(){
        return this.items.length
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.peek())
stack.toString()
console.log(stack.size())
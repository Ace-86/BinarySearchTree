class Node { 
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    } //class constructor to set up new node (data), left and right
}

class BST {
    constructor() {
        this.root = null; //top of tree
    }
    add(data) {
        const node = this.root;
        if (node === null) { //if first node equals null then....
            this.root = new Node(data);
            return;
} else {
    const searchTree = function(node) {
        if (data < node.data) {
            if (node.left === null) {
            node.left = new Node(data);
            return;
        } else if (node.left !== null) {
            return searchTree(node.left);
        }
    } else if (data > node.data) {
        if (node.right === null) {
            node.right = new Node(data);
            return;
        } else if (node.right !==null) {
            return searchTree(node.right);
        }
    } else {
        return null;
    }
};

return searchTree(node);
    }
}

findMin() {
    let current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

findMax() {
    let current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

find(data) { 
    let current = this.root;
    while (current.data !== data) {
        if (data < current.data) {
        current = current.left;
    } else {
        current = current.right;
    }
    if (current === null) {
        return null;
    }
}
return current;
}


isPresent(data) { //searches if this value going to be present in the tree
    let current = this.root;
    while (current) {
        if (data === current.data) {
            return true;
        }
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return false;
}


remove(data) {
     const removeNode = function(node, data) { //checking for empty tree
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            //if left or right node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) { //if node on left has 1 child
                return node.right
            }
            if (node.left == null) { //if node on right has 1 child
                return node.left
            }
            //node has two children
            var tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
        this.root = removeNode(this.root, data);
    }
    findMinHeight(node = this.root) {
        if (node == null) { //if nothing found in binary tree
        return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left <right) { //if left is less than right
        return left + 1;
        } else { //if left is more than right
        return right + 1;
        };
        }
    
    findMaxHeight(node = this.root) {
    if(node == null) {
    return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left >right) {
    return left + 1;
    } else {
    return right + 1;
    };
    }
    isBalanced() { //conditional statement that will return true or false (is tree balanced?)
        return(this.findMinHeight() >= this.findMaxHeight() - 1)
        }
        inOrder() {
            if (this.root == null) {//check if root is null
            return null;
            } else {
            var result = new Array(); //create new array of result
            function traverseInOrder(node) { //recursion (short circuit evaluation)
            node.left && traverseInOrder(node.left); //if node.left exist, then we run traverseInOrder(); if first thing is true , it will run second command and vice versa
            result.push(node.data); //push value in node onto array
            node.right && traverseInOrder(node.right); //if node.right exist, call traverseInOrder()
            }
            traverseInOrder(this.root);
            return result;
            };
            }
        preOrder() {
        if(this.root == null) {
        return null;
        } else {
        var result = new Array();
        function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
        }
        }
        postOrder() {
            if (this.root == null) {
            return null;
            } else {
            var result = new Array();
            function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
            };        
}
levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
        Q.push(this.root);
        while(Q.length > 0) {
            let node = Q.shift();
            result.push(node.data);
            if (node.left != null) {
                Q.push(node.left);
            };
            if (node.right != null) {
                Q.push(node.right);
            };
        };
            return result;
        } else {
            return null;
        };
    };
}

const bst = new BST();


 //commands to add and remove data
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

// bst.add(9);
// bst.add(23);
// bst.add(74);
// bst.remove(4);

//commands to find data, search tree, show results
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());
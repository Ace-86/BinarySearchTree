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
            if (this.root == null) {
            return null;
            } else {
            var result = new Array();
            function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
            };
            }
}
 const bst = new BST();


 //commands to add and remove data
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.remove(4);

//commands to find min, max and present values of the given data set
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));

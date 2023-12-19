function fishBash(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += "bash";
    }
    if (output === "") {
      output = i.toString();
    }
    console.log(output);
  }
}
fishBash(15);

function sortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

sortAsc([1, 23, 6, 4, 5]);

function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

sortDesc([1, 23, 6, 4, 5]);

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (str === reversed) {
    console.log(" Ini Palindrome");
  } else {
    console.log(" Ini Bukan Palindrome");
  }
}

isPalindrome("Kasur ini rusak");
isPalindrome("hello world");

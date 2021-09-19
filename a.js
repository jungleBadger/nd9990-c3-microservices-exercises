this.validateChain().then(errors => {
    if (errors.length > 0) {
        reject(errors);
    }
});

resolve(block);
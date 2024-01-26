const pickVersion = () => new Promise(res => {
    const use18 = Math.random() > 0.5; // 🤷‍♂️

    window.USE_18 = use18;

    res(use18);
});

pickVersion().then(use18 => {
    if (use18) {
        import('./index-v18');
    } else {
        import('./index-v17');
    }
});

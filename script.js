const validPromoCode = 'WATER'; // Kode promo yang valid
const usedPromoCodes = new Set(); // Set untuk menyimpan kode promo yang telah digunakan
let balance = 0;

document.getElementById('redeemButton').addEventListener('click', function() {
    const promoCodeInput = document.getElementById('promoCode').value.trim().toUpperCase();
    const messageDiv = document.getElementById('message');
    const balanceSpan = document.getElementById('balance');

    if (promoCodeInput === validPromoCode) {
        if (!usedPromoCodes.has(promoCodeInput)) {
            const reward = Math.floor(Math.random() * 91) + 10; // Angka acak antara 10 sampai 100
            balance += reward;
            balanceSpan.textContent = balance;
            messageDiv.textContent = `Selamat! Anda mendapatkan ${reward} poin.`;
            messageDiv.classList.add('blink');
            usedPromoCodes.add(promoCodeInput); // Tandai kode promo sebagai telah digunakan
        } else {
            messageDiv.textContent = 'Kode promo ini sudah pernah digunakan.';
            messageDiv.classList.remove('blink');
        }
    } else {
        messageDiv.textContent = 'Kode promo tidak valid.';
        messageDiv.classList.remove('blink');
    }

    messageDiv.classList.remove('hidden');
});

document.getElementById('withdrawButton').addEventListener('click', function() {
    const withdrawSection = document.getElementById('withdrawSection');
    withdrawSection.classList.remove('hidden');
});

document.getElementById('confirmWithdrawButton').addEventListener('click', function() {
    const walletAddress = document.getElementById('walletAddress').value.trim();
    const withdrawMessageDiv = document.getElementById('withdrawMessage');

    if (walletAddress === "") {
        withdrawMessageDiv.textContent = 'Alamat wallet tidak boleh kosong.';
        withdrawMessageDiv.style.color = 'red';
    } else {
        withdrawMessageDiv.textContent = `Withdraw berhasil ke alamat: ${walletAddress}. Anda menarik ${balance} poin.`;
        withdrawMessageDiv.style.color = 'green';
        balance = 0; // Reset balance setelah withdraw
        document.getElementById('balance').textContent = balance;
    }

    withdrawMessageDiv.classList.remove('hidden');
});

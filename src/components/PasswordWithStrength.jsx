import { useState } from 'react';

export default function PasswordWithStrength({ onChange }) {
    const [password, setPassword] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (onChange) onChange(value);
    };
    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length > 5) strength++;
        if (pass.length > 8) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        return strength;
    };
    const strength = getStrength(password);
    const width = ['w-1/5', 'w-2/5', 'w-3/5', 'w-4/5', 'w-full'];
    const labels = ['too easy my friend', 'a little bit weak', 'not bad', 'good', 'strong!'];
    return (
    <div className="mt-4">
        <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
        className="inputCustom w-full focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition duration-200"
        />
        <div className="mt-4 flex items-center gap-2">
        <div className="h-2 w-69 bg-gray-200 rounded">
            <div
            className={`h-full bg-orange-600 ${width[strength - 1] || 'w-0'} rounded transition-all duration-300`}
            />
        </div>
        <span className="text-xs text-gray-600 min-w-[60px] whitespace-nowrap text-right opacity-80 ms-2">
            {labels[strength - 1] || '—'}
        </span>
        </div>
    </div>
    );
}

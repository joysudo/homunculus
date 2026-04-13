// stolen from framed - yes wrote myself, but reusing!
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID } from '$env/static/private';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        if (!email || typeof email !== 'string') {
            return fail(400, { email, missing: true, message: 'please enter a valid email'});
        }
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`
        try {
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    records: [
                        {
                            fields: {
                                "Email": email
                            }
                        }
                    ]
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Airtable Error:', response.status, response.statusText, errorData);
                console.error('Airtable Error:', errorData);
                return fail(500, { message: 'failed to sync with Airtable' });
            }
            return { success: true };
        } catch (err) {
            return fail(500, {message: 'server communication problem :('});
        }
    }
} satisfies Actions;
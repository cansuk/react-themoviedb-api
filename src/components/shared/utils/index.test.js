import { getManagedArr } from ".";

test('Utils test : getManagedArr for pop operation', async () => {
    expect(getManagedArr([1, 2, 3], 1)).not.toContain(1);
});

test('Utils test : getManagedArr for push operation', async () => {
    expect(getManagedArr([1, 2, 3], 4)).toContain(4);
});
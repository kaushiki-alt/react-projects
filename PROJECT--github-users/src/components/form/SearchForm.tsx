import { useState, type SetStateAction } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from "sonner";

type SearchFormProps = {
    user: string;
    setUser: React.Dispatch<SetStateAction<string>>
}

const SearchForm = ({ user, setUser }: SearchFormProps) => {
    const [text, setText] = useState(user);

const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
        toast.error('Please enter username to search');
        return;
    }
        setUser(text);
};

    return (
        <form
        className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
        onSubmit={handleSubmit}>
            <Label htmlFor="search" className="sr-only">Search</Label>
            <Input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Search Github User...'
            className='grow bg-background'></Input>

            <Button type="submit">Search</Button>
        </form>
    )
}

export default SearchForm;

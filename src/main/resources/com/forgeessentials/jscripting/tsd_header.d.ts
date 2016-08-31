
declare type int = number;
declare type long = number;
declare type float = number;
declare type double = number;

declare function getNbt(entity: MC.Entity.Entity | MC.Item.ItemStack): any;
declare function setNbt(entity: MC.Entity.Entity | MC.Item.ItemStack, data: any);

/**
 * Constants that tell getNbt and setNbt the types of entries. Use nbt[NBT_INT + 'myVar'] for access
 */ 
declare const NBT_BYTE: string;
declare const NBT_SHORT: string;
declare const NBT_INT: string;
declare const NBT_LONG: string;
declare const NBT_FLOAT: string;
declare const NBT_DOUBLE: string;
declare const NBT_BYTE_ARRAY: string;
declare const NBT_STRING: string;
declare const NBT_COMPOUND: string;
declare const NBT_INT_ARRAY: string;

/**
 * Constants for permission level used when registering permissions
 */ 
declare const PERMLEVEL_TRUE: int;
declare const PERMLEVEL_OP: int;
declare const PERMLEVEL_FALSE: int;

declare namespace MC {
    
    interface JavaList<T> {
        size(): int;
        isEmpty(): boolean;
        toArray(): any[];
        get(index: int): T;
        add(element: T): T;
        set(index: int, element: T): T;
        clear(): void;
        remove(index: int): T;
        remove(element: T): boolean;
    }
    
    type CommandCallback = (args: CommandArgs) => void;
    
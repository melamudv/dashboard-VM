import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})
export class ArrayFilterPipe implements PipeTransform {

    transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
        return items.filter(item => {
            for (let field in conditions) {
                if (item.name[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    }

    // transform(vms: Array<any>, args: any[]): any {
    //     return vms.filter(vm => vm.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    // }
}
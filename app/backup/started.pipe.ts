import { Pipe, PipeTransform, Injectable, Component} from "@angular/core";

@Pipe({
    name: "started",
    pure: false
})
// export class StartedPipe implements PipeTransform {
//     transform(value: any, [status]): any {
//         return value.filter((item:any) => item.PolicyType == 'Backup');
//     }
// }


@Injectable()
export class StartedPipe implements PipeTransform {
    transform(Policy: any[], args: any[]): any {
        if (Policy==null) {
            return null;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
       // console.log("Filter",Policy.filter(item => item.PolicyType.indexOf(args.PolicyType) !== -1),args.PolicyType);
        return Policy.filter(item => item.PolicyType.indexOf(args.PolicyType) !== -1);
    }
}
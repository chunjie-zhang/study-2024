package zhangchunjie.集合框架.day03;

import java.util.List;

public class MyIterator {
    private Integer count = 0;
    private List list;
    public MyIterator(List list) {
        this.list = list;
    }
    public Object next() throws runtimeException {
        if(list == null) {
            throw new runtimeException("list is null");
        }
        if(this.count >= list.size()) {
            throw new runtimeException("下标越界了");
        }
        return list.get(this.count++);
    }

    public boolean hasNext() {
        return this.list.size() > this.count;
    }
}
